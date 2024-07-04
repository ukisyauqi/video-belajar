import { Link } from "react-router-dom"
import { calculateDiscount, convertToRupiah } from "../../utils/function"

export default function CourseCard({ course }) {
  return (
    <>
      <Link to={`/course/${course.id}`}>
        <span className="border rounded-lg bg-white p-4 space-y-3 hover:shadow-lg hover:transition-all block">
          <span className="space-y-3 flex gap-4 items-center md:block">
            <img
              src={`${course.imageUrl}`}
              alt="image-items-1"
              className="w-28 h-28 rounded-xl md:w-full md:h-full image-center"
            />

            <span>
              <h5 className="font-semibold max-w-container md:mt-3">
                <span className="md:line-clamp-1 line-clamp-2">
                  {course.title}
                </span>
              </h5>
              <p className="font-medium text-gray-500 hidden mt-2 mb-3 md:block">
                <span className="md:line-clamp-2">{course.description}</span>
              </p>

              <span className="flex items-center">
                <img
                  src="/avatar/1.png"
                  alt="avatar-1"
                  className="size-10 mr-3"
                />
                <span>
                  <h6 className="font-medium line-clamp-1">
                    {course.mentorsName}
                  </h6>
                  <p className="text-gray-600 line-clamp-1">
                    <span>{course.mentorsJobTitle}</span>
                    <span className="hidden md:inline"> di</span>
                    <span className="font-semibold ml-1 hidden md:inline">
                      {course.mentorsCompanyName}
                    </span>
                  </p>
                </span>
              </span>
            </span>
          </span>

          <span className="flex items-center gap-2">
            <img src="/icon-rating.png" alt="" />
            <p className="underline text-sm text-gray-600 line-clamp-1">
              {course.rating} ({course.totalRating})
            </p>
            <span className="flex-1"></span>
            <p className="text-green-500 font-semibold text-2xl line-clamp-1">
              {convertToRupiah(calculateDiscount(course.price, course.discount))}
            </p>
          </span>
        </span>
      </Link>
    </>
  )
}
