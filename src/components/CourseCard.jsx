export default function CourseCard({ course }) {
  return (
    <>
      <div className="border rounded-lg bg-white p-4 space-y-3 max-w-96 flex-1 min-w-96 md:min-w-80">
        <div className="space-y-3 flex gap-4 items-center md:block">
          <img
            src={`${course.courseImage}`}
            alt="image-items-1"
            className="w-28 h-28 rounded-xl md:w-full md:h-full image-center"
          />

          <div>
            <h5 className="font-semibold line-clamp-2 md:line-clamp-1">
              {course.title}
            </h5>
            <p className="font-medium text-gray-500 hidden mt-2 mb-3 md:line-clamp-2">
              {course.description}
            </p>

            <div className="flex items-center">
              <img
                src="/avatar/1.png"
                alt="avatar-1"
                className="size-10 mr-3"
              />
              <div>
                <h6 className="font-medium line-clamp-1">{course.mentor}</h6>
                <p className="text-gray-600 line-clamp-1">
                  <span>{course.mentorsRole}</span>
                  <span className="hidden md:inline"> di</span>
                  <span className="font-semibold ml-1 hidden md:inline">
                    {course.mentorsWorkplace}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icon-rating.png" alt="" />
          <p className="underline text-sm text-gray-600 line-clamp-1">
            {course.rating} ({course.totalRating})
          </p>
          <div className="flex-1"></div>
          <p className="text-green-500 font-semibold text-2xl line-clamp-1">
            {course.price}
          </p>
        </div>
      </div>
    </>
  );
}
