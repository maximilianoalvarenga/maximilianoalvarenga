import { socialInformations, userInformations } from '../../services/informations';
import {
        CardProfileStyle,
        FirstCicle,
        InformationsUser,
        LinkContainer,
        SecondCicle,
        SocialLinks,
        ThirdCicle,
        UserData,
    } from "./CardProfileStyle";

const CardProfile = () => {
    return (
        <CardProfileStyle>
            <FirstCicle>
                <SecondCicle>
                    <ThirdCicle imgProfile={ userInformations.image} />
                </SecondCicle>
            </FirstCicle>
            <UserData>
                <InformationsUser>
                    <h1>{userInformations.name}</h1>
                    <h2>{userInformations.role}</h2>  

                    <SocialLinks>
                        { socialInformations.map((social) => social.name !== 'Email' &&
                            <LinkContainer href={social.link} target='_blank'>
                                <img src={social.image} alt={social.name} />
                            </LinkContainer> 
                        )}
                    </SocialLinks>
                </InformationsUser>
            </UserData>
        </CardProfileStyle>
    );
}

export default CardProfile;