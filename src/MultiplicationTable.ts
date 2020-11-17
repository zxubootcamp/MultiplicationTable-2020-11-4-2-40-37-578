import { resourceLimits } from 'worker_threads'

export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.validateInputOrder(start, end)) {
      return ''
    }
    if (!this.validateInputRange(start, end)) {
      return 'The start number and the end number should be any integer in a range of 1 to 10 (inclusive).'
    }

    const content = this.generateMultipleTableContent(start, end)

    let multiplicationTable = `${content[0][0].factor1}*${content[0][0].factor2}=${content[0][0].product}\n`
    for (let indexRow = 1; indexRow < content.length; indexRow++) {
      for (let indexColumn = 0; indexColumn < content[indexRow].length; indexColumn++) {
        if (indexColumn < content[indexRow].length - 1) {
          multiplicationTable += `${content[indexRow][indexColumn].factor1}*${content[indexRow][indexColumn].factor2}=${content[indexRow][indexColumn].product}  `
        }
        else {
          multiplicationTable += `${content[indexRow][indexColumn].factor1}*${content[indexRow][indexColumn].factor2}=${content[indexRow][indexColumn].product}\n`
        }
      }
    }
    return multiplicationTable.toString()
  }

  private validateInputOrder(start: number, end: number): boolean {
    return start <= end
  }

  private validateInputRange(start: number, end: number): boolean {
    return start > 0 && start <= 10 && end > 0 && end <= 10
  }

  public generateMultipleTableContent(start: number, end: number): Array<Array<Expression>> {
    const result = new Array<Array<Expression>>()
    const side = end - start + 1
    for (let indexRow = 0; indexRow < side; indexRow++) {
      result.push(new Array<Expression>())
      for (let indexColumn = 0; indexColumn <= indexRow; indexColumn++) {
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
