import { resourceLimits } from 'worker_threads'

export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.validateInputNumbers(start, end)) {
      return ""
    }
    return '1*1=1'
  }

  private validateInputNumbers(start: number, end: number): boolean {
    return start <= end
  }

  public generateMultipleTable(start: number, end: number): Array<Array<Expression>> {
    const result = new Array<Array<Expression>>()
    const side = end - start + 1
    for (let indexRow = 0; indexRow < side; indexRow++) {
      result.push(new Array<Expression>())
      for (let indexColumn = 0; indexColumn < side; indexColumn++) {
        result[indexRow].push(new Expression(start + indexColumn, start + indexRow))
      }
    }
    return result
  }
}

export class Expression {
  public product: number
  constructor(public factor1: number, public factor2: number) {
    this.product = factor1 * factor2
  }
}

// result[indexRow].push(`${numbers[0] + indexRow} * ${numbers[0] + indexRow + indexColumn}`);
// when是指测的函数
