interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const NameInput = ({ name, setName}: Props) => (
  <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Rick Sanchez..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
)