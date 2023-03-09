import TreeStore from '~/utils/classes/TreeStore'
import { IItem } from '~/utils/classes/types'

const items = [
  { id: 1, parent: 'root' },

  { id: 2, parent: 1, type: 'test' },
  { id: 3, parent: 1, type: 'test' },

  { id: 4, parent: 2, type: 'test' },
  { id: 5, parent: 2, type: 'test' },
  { id: 6, parent: 2, type: 'test' },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null }
] as IItem[]
let ts: TreeStore
describe('TreeStore', () => {
  beforeAll(() => {
    ts = new TreeStore(items)
  })

  it('ts.getAll()', () => {
    const expectedResult: IItem[] = [{ id: 1, parent: 'root' }, { id: 2, parent: 1, type: 'test' }, { id: 3, parent: 1, type: 'test' }, { id: 4, parent: 2, type: 'test' }, { id: 5, parent: 2, type: 'test' }, { id: 6, parent: 2, type: 'test' }, { id: 7, parent: 4, type: null }, { id: 8, parent: 4, type: null }]
    expect(ts.getAll()).toEqual(expectedResult)
  })

  it('ts.getItem(7)', () => {
    const expectedResult: IItem = { id: 7, parent: 4, type: null }
    expect(ts.getItem(7)).toEqual(expectedResult)
  })

  it('ts.getChildren(4)', () => {
    const expectedResult: IItem[] = [{ id: 7, parent: 4, type: null }, { id: 8, parent: 4, type: null }]
    expect(ts.getChildren(4)).toEqual(expectedResult)
  })

  it('ts.getChildren(5)', () => {
    const expectedResult: IItem[] = []
    expect(ts.getChildren(5)).toEqual(expectedResult)
  })

  it('ts.getChildren(2)', () => {
    const expectedResult: IItem[] = [{ id: 4, parent: 2, type: 'test' }, { id: 5, parent: 2, type: 'test' }, { id: 6, parent: 2, type: 'test' }]
    expect(ts.getChildren(2)).toEqual(expectedResult)
  })

  it('ts.getAllChildren(2)', () => {
    const expectedResult: IItem[] = [{ id: 4, parent: 2, type: 'test' }, { id: 5, parent: 2, type: 'test' }, { id: 6, parent: 2, type: 'test' }, { id: 7, parent: 4, type: null }, { id: 8, parent: 4, type: null }]
    expect(ts.getAllChildren(2)).toEqual(expectedResult)
  })

  it('ts.getAllParents(7)', () => {
    const expectedResult: IItem[] = [{ id: 4, parent: 2, type: 'test' }, { id: 2, parent: 1, type: 'test' }, { id: 1, parent: 'root' }]
    expect(ts.getAllParents(7)).toEqual(expectedResult)
  })
})
