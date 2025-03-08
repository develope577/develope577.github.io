import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = contactFormSchema.parse(req.body);

      // Here we would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Handle any additional business logic

      // For now, we'll just log the contact submission
      console.log("Contact form submission:", validatedData);

      // Send success response
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      }

      // Handle unexpected errors
      console.error("Contact form submission error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process contact form submission",
      });
    }
  });

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
