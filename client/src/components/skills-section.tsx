import { motion } from "framer-motion";
import { skillCategories, otherSkills, stats } from "@/data/skill-data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className={`${category.icon} text-primary mr-3 text-3xl`}></i>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherSkills.map((skill, index) => (
              <motion.span 
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.value}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${stat.icon} text-3xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.value}</h3>
              <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
