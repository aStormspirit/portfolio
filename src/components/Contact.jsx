import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import StarWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

// XHzt6MNYeOa5LmLJO
// template_phy8zpn
// service_irgz3bn

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_irgz3bn',
        'template_632qsin',
        {
          from_name: form.name,
          to_name: 'Vladimir',
          from_email: form.email,
          to_email: 'contact@jsmastery.pro',
          message: form.message,
        },
        'XHzt6MNYeOa5LmLJO'
      )
      .then(
        () => {
          setLoading(false);
          alert('Спасибо');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Ошибка');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Будем на связи</p>
        <h3 className={styles.sectionHeadText}>Контакты</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ваш email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ваше сообщение..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </span>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default StarWrapper(Contact, 'contact');
