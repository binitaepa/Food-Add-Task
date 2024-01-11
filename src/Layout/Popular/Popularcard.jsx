



// import './Style.css'


const Popularcard = ({Items}) => {
   const {Name,ImageUrl} =Items;
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // };
    return (
        <div className="card card-compact md:w-96 h-auto bg-transparent ">
  <figure><img src={ImageUrl} alt="Shoes" className="h-48  w-full rounded-xl shadow-3xl " /></figure>
  <div className="card-body">
    <h2 className="card-title  flex justify-center text-sm items-center">{Name}</h2>
    
    </div>
  </div>
    );
};

export default Popularcard;