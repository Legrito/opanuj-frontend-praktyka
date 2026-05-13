interface Props {
  text: string;
  onClick: () => void;
}

export const Button = ({onClick, text}: Props) => (
  <button
  className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
  onClick={onClick}
>
  {text}
</button>
)