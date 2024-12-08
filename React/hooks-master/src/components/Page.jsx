import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
