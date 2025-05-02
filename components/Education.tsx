// components/Education.tsx

const Education = () => {
    return (
      <section id="education" className="py-16 bg-white dark:bg-gray-950 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Education Info</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            My academic journey has built a strong foundation in mathematics, logical thinking, and problem-solving — all of which shape my approach to software development.
          </p>
  
          <div className="space-y-6 text-left">
            {/* MSc */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                M.Sc. in Mathematics <span className="text-sm text-indigo-500">(2024 – 2025)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chattogram College, National University, Bangladesh
              </p>
            </div>
  
            {/* BSc */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                B.Sc. in Mathematics <span className="text-sm text-indigo-500">(2018 – 2023)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Satkania Govt. College, National University, Bangladesh
              </p>
              <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">CGPA: 3.21 (out of 4.00)</p>
            </div>
            {/* Hsc  */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                HSC (Higher Secondary Certificate)<span className="text-sm text-indigo-500">(2015 – 2017)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chattagram Biggan College
              </p>     
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  