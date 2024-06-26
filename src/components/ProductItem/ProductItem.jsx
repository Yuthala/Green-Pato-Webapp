import React, { useState }from "react";
import Button from "../Button/Button";
import './ProductItem.css';

	const ProductItem = ({ product, className, onAdd, onRemove })=> {
		const [count, setCount] = useState(0);

		const { img, title, description, price, id } = product;

		const handleIncrement = () => {
			setCount(count+1);
			onAdd(product);
		}

		const handleDecrement = () => {
			setCount(count-1);
			onRemove(product);
		}

	return (
		<div className={'product' + className}>


			<div className={'img'}><img src={img}/></div>
			<div className={'title'}>{title}</div>
			<div className={'description'}>{description}</div>
			<div className={'price'}><span>Цена: <b>{price}</b> р.</span></div>

			{/* контейнер с кнопками + - */}
			<div className="btn-container">
				<Button title={'+'} type={'add'} onClick={handleIncrement} />

				{/* поле с количеством */}
				<div className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>{count}</div>

				{count !== 0 ? (
				<Button title={'-'} type={'remove'} onClick={handleDecrement} />
				) : ""}
			</div>
		</div>
	)
};


export default ProductItem;