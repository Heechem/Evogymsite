interface Props {
  name: string;
  description?: string;
  image: string;
}

const Class = ({ name, image, description }: Props) => {
  const overlayStyles = `p-5 absolute  z-30 flex h-[380px] w-[450-px] flex-col items-center justify-center whitespace-normal bg-sky-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 font-bold rounded-md `;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img
        src={image}
        alt={name}
        className="h-[380px] w-[450px] object-cover"
      />
    </li>
  );
};

export default Class;
