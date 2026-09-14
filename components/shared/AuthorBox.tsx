import AuthorAvatar from "./AuthorAvatar";

interface AuthorBoxProps {
  author: {
    name: string;
    initial: string;
    color: string;
    role?: string;
  };
  bio?: string;
  showSocial?: boolean;
  className?: string;
}

export default function AuthorBox({
  author,
  bio,
  showSocial = true,
  className = "",
}: AuthorBoxProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-amber-100 p-6 ${className}`}
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <AuthorAvatar
          initial={author.initial}
          color={author.color}
          size="lg"
          className="flex-shrink-0"
        />
        <div>
          <h3 className="font-bold text-lg text-amber-900">{author.name}</h3>
          {author.role && (
            <p className="text-sm text-gray-500 mb-3">{author.role}</p>
          )}
          {bio && <p className="text-gray-600 text-sm">{bio}</p>}
          {showSocial && (
            <div className="flex items-center gap-3 mt-4">
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition">
                f
              </button>
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition">
                𝕏
              </button>
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition">
                in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
