import { CSSProperties, FC } from "react";

const styles: CSSProperties  = {
  'fontSize': '22px',
  'color': 'cadetblue',
  'fontFamily': 'Arial',
  lineHeight: '1.2',
  paddingLeft: '10px'
};

export const SubTitle: FC = () => <p style={styles}>Search, Learn, Dream</p>;