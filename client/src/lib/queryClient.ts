import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Check if we're in a static deployment environment (Vercel)
const isStaticDeployment = () => {
  return window.location.hostname.includes('vercel.app') || 
         import.meta.env.PROD === true;
};

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For static deployments, handle contact form submissions differently
  if (isStaticDeployment() && url === '/api/contact' && method === 'POST') {
    // In static deployment, simulate a successful form submission
    console.log('Static deployment: simulating contact form submission');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create a mock response object to mimic a real API response
    const mockResponse = new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        data: {
          id: 1,
          name: (data as any)?.name || "User",
          email: (data as any)?.email || "user@example.com",
          phone: (data as any)?.phone || "",
          service: (data as any)?.service || "",
          date: (data as any)?.date || "",
          message: (data as any)?.message || "",
          createdAt: new Date().toISOString()
        }
      }),
      { 
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
    return mockResponse;
  }
  
  // Normal API request for development
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
