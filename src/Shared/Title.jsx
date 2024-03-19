

const Title = ({ heading, head }) => {
    return (
        <div>
            <h1 className="uppercase text-5xl font-bold text-center my-14 z-10">{head} <span className="text-[#dc0202]">{heading}</span></h1>
        </div>
    );
};

export default Title;