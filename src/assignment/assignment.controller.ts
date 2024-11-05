import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Endpoint for Fibonacci sequence
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    const fibonacci = (num: number) => {
      let a = 0, b = 1, result = [];
      for (let i = 1; i <= num; i++) {
        result.push(a);
        [a, b] = [b, a + b];
      }
      return result;
    };

    return { sequence: fibonacci(num) };
  }

} 
