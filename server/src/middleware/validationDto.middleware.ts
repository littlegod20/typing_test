import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateDto(dtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);
    const errors: ValidationError[] = await validate(dtoInstance, {
      whitelist: true, // Removes properties not defined in the DTO
      forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are present
    });

    if (errors.length > 0) {
      const formattedErrors = errors.map((error) => ({
        property: error.property,
        constraints: error.constraints,
      }));
      res.status(400).json({ errors: formattedErrors });
      return;
    }

    // Attach the validated DTO instance to the request for later use
    req.body = dtoInstance;
    next();
  };
}
