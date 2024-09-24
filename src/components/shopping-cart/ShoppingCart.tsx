import { RefObject } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './shoppingCart.module.css';
import Image from 'next/image';
import { Product } from '@/types/interfaces';
import Link from 'next/link';

interface ShoppingCartProps {
  cartBoxRef: RefObject<HTMLDivElement>;
}

function ShoppingCart({ cartBoxRef }: ShoppingCartProps) {
  const { cartItems, setCartItems } = useCart();

  //finding the totalPrice to the cart
  const totalPrice = Object.values(cartItems).reduce((acc, current) => {
    const priceNumber = current.price.split('$ ')[1];
    const calculatePartialValue = Number(priceNumber) * current.quantity;

    return acc + calculatePartialValue;
  }, 0);

  //adding up the totalItems to the cart
  const totalItems = Object.values(cartItems).reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  //adding cartItems to the cart
  const handleAddItems = (product: Product) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      }),
    );
  };

  //removing cartItems from the cart
  const handleRemoveItems = (product: Product) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  //delete items from the cart
  const deleteItems = (product: Product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div ref={cartBoxRef} className={styles.cartBox}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.values(cartItems).map((product) => (
          <div className={styles.cartBoxContent} key={product.id}>
            <Image src={`/images/${product.imageUrl}`} width={54} height={66} alt='product image' />
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <div className={styles.cartBoxButtons}>
              <button onClick={() => handleRemoveItems(product)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => handleAddItems(product)}>+</button>
            </div>
            <button onClick={() => deleteItems(product)} className={styles.deleteButton}>
              <Image
                src='/assets/icon-trash.svg'
                width={16}
                height={20}
                alt='delete product'
                className={styles.iconTrash}
              />
            </button>
          </div>
        ))
      )}
      <hr />
      <div className={styles.cartBoxTotal}>
        <p className={styles.totalTitle}>Total</p>
        <div>
          <p className={styles.totalPrice}>$ {totalPrice}</p>
          <p className={styles.totalItems}>{totalItems} Items</p>
        </div>
        <Link href='/checkout' className={styles.checkoutButton}>
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
