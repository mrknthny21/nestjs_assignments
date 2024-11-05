import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  

  // Endpoint for Factorial Calculator
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);

    const factorial = (n: number): number => {
      if (n < 0) return -1; // Handle negative numbers
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    };

    return { factorial: factorial(num) };
  }


} 
