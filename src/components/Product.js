// import {useState} from "react";

export default function Product({product, basket, setBasket, total, money}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        // sepette ürün var mı yok mu controlü
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket){
            checkBasket.amount +=1
            // sepette daha önceden ürün var mı yok mu onun kontrolünü yaptık ve sepete ekleme işlemini gerçekleştirdik.
            // yani o anki ürünü haric tuttum. ve hariç tuttuğum product ın amountunu 1 artırdık.
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else{
            setBasket([...basket, {
                id: product.id,
                amount:1
            }])
        }
    }
    const removeBasket = () => {
        // sepette ürün var mı yok mu controlü
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id )
        currentBasket.amount -=1
        // sepet içerisinde ki ürün sayısı 0 mı değil mi kontrolü
        if (currentBasket.amount == 0){
            setBasket([...basketWithoutCurrent])
        }else{
            // sepette daha önceden ürün var mı yok mu onun kontrolünü yaptık ve sepete ekleme işlemini gerçekleştirdik.
            // yani o anki ürünü haric tuttum. ve hariç tuttuğum product ın amountunu 1 azalttık.
            setBasket([...basketWithoutCurrent, currentBasket])
        }


    }

    return (
        <>
            <style >{
                `
                .product{
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                }`
            }</style>
            <div className="product">
                {product.title}
                <div className="price">
                    {product.price}
                </div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <div className="amount">{basketItem && basketItem.amount ||0}</div>
                    <button disabled={total+product.price > money} onClick={addBasket}>Satın al</button>
                </div>
            </div>
        </>
    )
}