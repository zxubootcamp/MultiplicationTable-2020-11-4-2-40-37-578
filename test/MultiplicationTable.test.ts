import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render null of (2, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe("")
  })

  it('should render error message of (0, 11)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('The start number and the end number should be any integer in a range of 1 to 10 (inclusive).')
  })
})
