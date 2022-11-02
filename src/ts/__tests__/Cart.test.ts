import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should aontain 3 items', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'The Avengers', 1100, 2012, 'USA', 'Avengers Assemble!', 'fantasy', 137));
  expect(cart.items.length).toBe(3);
});

test('Total sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'The Avengers', 1100, 2012, 'USA', 'Avengers Assemble!', 'fantasy', 137));
  expect(cart.total).toBe(4000);
});

test('discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'The Avengers', 1100, 2012, 'USA', 'Avengers Assemble!', 'fantasy', 137));
  expect(cart.getDiscount(10)).toBe(3600);
});

test('delete successfully', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'The Avengers', 1100, 2012, 'USA', 'Avengers Assemble!', 'fantasy', 137));
  cart.delete(1001);
  expect(cart.items.length).toBe(2);
});

test('delete unsuccessfully', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'The Avengers', 1100, 2012, 'USA', 'Avengers Assemble!', 'fantasy', 137));
  expect(() => cart.delete(1001232)).toThrowError('No such id in cart');
});