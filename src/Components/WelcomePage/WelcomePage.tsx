import { FC } from "react"
import style from "./WelcomePage.module.css";
import { useState } from "react";
import styled from "styled-components";

const Dot = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgba(192,192,192,0.5);
    border: 0.2rem solid rgba(255, 255, 255,0.6);
    border-radius: 0.2rem;
    margin: 0 0.4rem;
    transition: all 0.3s ease-in-out;
    text-align:center;

    &.active{
        width: 2rem;
        height: 2rem;
        background-color: rgba(192,192,192,0.8);
    }
`;

const DotsContainer=styled.div`
height:20%
`;

const Container = styled.div`
height: 80%;
`;

const WelcomePage: FC<{}> = () => {

    const allPages: number = 4;

    const [pageNumber, setPageNumber] = useState(1);

    return <div className="col-12 full-height d-flex flex-column align-items-center">

        <div className="col-12 col-md-5 text-light full-height overflow-hidden display-5 d-flex flex-column justify-content-center align-items-center">
            <Container>

                <div className="full-height d-flex flex-column justify-content-center align-items-center">
                    welcome to my-message :)
                </div>

                <div className="full-height d-flex flex-column justify-content-center align-items-center">
                    fast
                </div>

                <div className="full-height d-flex flex-column justify-content-center align-items-center">
                    secure
                </div>

                <div className="full-height d-flex flex-column justify-content-center align-items-center">
                    free
                </div>


            </Container>

            <DotsContainer className="d-flex flex-row col-12 justify-content-center align-items-center">
                <Dot className={(true ? "active" : "")} />
            </DotsContainer>

        </div>

    </div>
}

export default WelcomePage;