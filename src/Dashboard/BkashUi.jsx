import bkash from '../assets/bkash.avif'

const BkashUi = () => {
    return (
        <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${bkash})` }}
    >
    </div>
    );
};

export default BkashUi;