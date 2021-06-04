import styled from 'styled-components/native';
import { EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
    /* margin: -${RFValue(220)}px ${RFValue(12)}px 0; */
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(38)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;

    color: ${({ theme }) => theme.colors.title};
`;

export const DepositIcon = styled(EvilIcons)`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(48)}px;
    
    color: ${({ theme }) => theme.colors.title};
`

export const LastTransaction= styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.text};
`;
