interface IHeaderProps {
  removeNav?: boolean;
}

const Header = ({ removeNav }: IHeaderProps) => {
  <header>{!removeNav && <nav></nav>}</header>;
};

export default Header;
