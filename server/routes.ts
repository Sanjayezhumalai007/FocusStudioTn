import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact submission
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        date: validatedData.date || "",
        message: validatedData.message,
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        data: submission 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error, please try again later" 
        });
      }
    }
  });
  
  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json({ 
        success: true,
        data: submissions 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Server error, please try again later" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
