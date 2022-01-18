
const calculateDiscount = (price,discount) =>{
    return (parseFloat(price)  * ( 100  - parseFloat(discount) ) ) / 100
}//calculateDiscount

window.onload = () =>{
    let formDiscount = document.getElementById("calculateDiscount");
    let formDiscountCupon = document.getElementById('formDiscountWithCupon');

    formDiscount.addEventListener("submit", (e) =>{
        e.preventDefault();
        let priceInput = document.getElementById("price");
        let discount = document.getElementById("discount");

        let resultInput = document.getElementById("discountResult");

       resultInput.value = calculateDiscount(priceInput.value, discount.value).toString();

    })//formDiscount

    formDiscountCupon.addEventListener("submit", ()=>{
        let coupons = [
            {
                name: "JuanDC_es_Batman",
                discount: 10

            },
            {
                name: "pero_no_le_digas_a_nadie",
                discount: 10

            },
            {
                name: "es_un_secreto",
                discount: 10

            },
        ];
        let priceInput = document.getElementById("priceInput");
        let coupon = document.getElementById('cuponName');
        let resultInput = document.getElementById('discountResultWithCupon');
        let notification = document.getElementById('notification');

        let discount;
        let priceInputValue = priceInput.value;
        let couponInputValue = coupon.value;
    //    error first
        let userCouponDiscount =  coupons.find(coupon => couponInputValue === coupon.name)

        if(!userCouponDiscount){
            notification.style.display='block';
            setTimeout(()=>{
                let notification = document.getElementById('notification');
                notification.style.display = 'none'
            },3000)//setTimeout
        }else{
            resultInput.value = calculateDiscount(priceInput.value,userCouponDiscount.discount).toString();


       }//if userCouponDiscount





    })//formDiscountCupon
}