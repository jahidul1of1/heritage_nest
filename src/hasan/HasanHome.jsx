const HasanHome = () => {
  return (
    <div>
      {/* <div className="bg-gradient-to-b from-transparent to-black opacity-72 md:opacity-88"></div> */}

      <div className="text-white relative bg-gradient-to-t from-stone-800 to-slate-800 h-screen">
        <div className="absolute h-full w-full object-cover mix-blend-overlay">
          <video className="min-w-full h-screen" autoPlay loop>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1274346276736644011/TEAM/4634/d923/-f8f8-4a60-bda2-7982b8d7a898?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzAYw9BI9Ng1fSPzMAR70j2qZ~eBvKKwExzCnBzHaLxClWK1UvJED1C4zcijp03ZiYuJ8oebIWtCkS5m4FweaQt7LenIxs1otkvtcEczFqkR-zF~cD~90kHQrAOul4scEACaWykCY0ZmDcJzkS82QVLe-rO9ocJ2c~gSTaXByMnpA6YKy-QS8vDchKC38TY3bpNzlUPruV0X3RWIHKF2u3RLyfg~JQ0ejSpiIAu63pRO~QDWKFa0Zdahr1U9dLp6nC9QXIqTNs71~6a7dAdZwC~9vR4nXQkTg1w6QTU3QZKvuW5pImcZtnHJazy~GNuJdGb9ewp9fI4iF-xwyLbRxQ__"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="grid place-content-center h-full mx-auto p-10 md:p-20">
          <p className="leading-6 font-medium">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <h2 className="text-white text-center font-montserrat font-bold text-6xl md:text-7xl leading-9 md:leading-10 tracking-tighter md:tracking-normal">
            Your Portal to India's Exquisite Real Estate
          </h2>
          <div className="text-center mt-12">
            <button className="px-4 py-6 bg-[#0059B1] rounded ">
              Find Property
            </button>
          </div>
        </div>
      </div>

      {/* Property part */}
      <div></div>
    </div>
  );
};

export default HasanHome;
