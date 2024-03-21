import OrderDetails from "./[orderId]/page";
import Footer from "./components/layout/Footer";
import { Navbar, Topbar } from "./components/layout/admin";

function App() {
  return (
    <>
    <div>
    <Topbar/>
      <Navbar />
    </div>
      <OrderDetails />
    {/* <Footer/>   */}
    <div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
