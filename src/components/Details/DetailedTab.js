import styled from "styled-components";
import Chart from '../Chart'
import { BuyButton } from '../../styles/GlobalStyle'
import { fillOrder } from '../../utils/ImmutableXConnection'
import '../../styles/details.css'
import NewOwners from "../NewOwners";


function DetailedTab({ proto, quality, id, orders, price, getQuality }) {

    const Pcontainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content : center;
    align-items:center;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  `


    return (
        <>
            <div className="d-flex align-items-center">
                <img className='nft-item-cover' src={`https://card.godsunchained.com/?id=${proto}&q=${quality}`} alt={`${id} cover`} />
                <div>
                    <span>Last trades : </span>

                    <NewOwners proto={proto} quality={getQuality(quality)} />
                </div>

            </div>

            <Pcontainer>
                <Chart proto={proto} quality={getQuality(quality)} type={"month-detailed"} />
                <Chart proto={proto} quality={getQuality(quality)} type={"week-detailed"} />

            </Pcontainer>


        </>
    )
}

export default DetailedTab