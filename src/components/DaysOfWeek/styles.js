import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View `
  height:100px;
  margin-top:20px;
`;
export const TabsContainer = styled.ScrollView.attrs({
  horizontal:true,
  contentContainerStyle: {paddingLeft:10, paddingRight:20},
  showsHorizontalScrollIndicator:false,
}) ` `;
export const TabsItem = styled.TouchableOpacity`
  width:80px;
  height:100px;
  align-items:center;
  background: rgba(237,238,241,1);
  border-radius: 3px;
  margin-left: 3px;
  padding:10px;
  justify-content: space-between;

`;
export const TabText = styled.Text`
  font-size:12px;
  padding-bottom:10px;
  padding-top:5px;
  text-align:center;
  color: #3E5E6A;

`;
