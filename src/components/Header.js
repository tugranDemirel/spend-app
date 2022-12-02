import {useState} from "react";

function Header({money, total}) {
    return (
        <>

            {total > 0 && (money - total) !== 0 && (
                <div>Harcamak için {money - total} TL paranız kaldı</div>
            )}
            {total === 0 && (
                <div>Harcamak için {money - total} TL paranız var</div>
            )}
            {(money - total) === 0 && (
                <div>paran bitti</div>
            )}
        </>
    )
}
export default Header;