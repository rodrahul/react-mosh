import { produce } from "immer";
import { useState } from "react";

const UpdateObject = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 2,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item,
      ),
    });

    // Using immer
    setCart(
      produce(cart, (draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) {
          item.quantity = 2;
        }
      }),
    );
  };

  return (
    <>
      <div>UpdateState</div>
    </>
  );
};

export default UpdateObject;
