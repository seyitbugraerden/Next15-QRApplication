const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form>
        <input
          name="link"
          type="text"
          placeholder="Linkinizi girin"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </form>
    </div>
  );
};

export default Dashboard;
