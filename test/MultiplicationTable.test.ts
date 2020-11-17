import { MultiplicationTable } from '../build/src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1\n')
  })

  it('should render null of (2, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
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

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16\n')
  })

  it('should render multiplication table of (8, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 8
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('8*8=64\n8*9=72   9*9=81\n8*10=80  9*10=90  10*10=100\n')
  })
})
