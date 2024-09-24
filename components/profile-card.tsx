import QRCodePage from "./qr-code";

function ProfileCard({ user, state }: { user: any; state: any }) {
  return (
    <div className="w-full p-12">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt="Bonnie Green"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name} {user.surname}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.username}
        </span>
        <div className="flex mt-4 md:mt-6">
          <QRCodePage state={state} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
