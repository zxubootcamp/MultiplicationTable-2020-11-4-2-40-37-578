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

  // it('should render multiplication table of (1, 1)', () => {
  //   // given
  //   const table = new MultiplicationTable()
  //   const start = 8
  //   const end = 10

  //   //when
  //   const rendered = table.render(start, end)

  //   //then
  //   expect(rendered).toBe(`8*8=64\n` + `8*9=72   9*9=81\n` + `8*10=90  9*10=90  10*10=100`)
  // })
})
