/**
 * zayavki-s-sajta controller
 */

import { factories } from '@strapi/strapi';
/** import type { Strapi } from '@strapi/strapi'; */

export default factories.createCoreController('api::zayavki-s-sajta.zayavki-s-sajta', ({ strapi }) => ({
    async create(ctx) {
      const result = await super.create(ctx); // Сначала вызываем стандартный метод create
       try {
           await strapi.plugins['email'].services.email.send({
               to: 'kkirrinweb@yandex.ru',
               from: 'pskkirrin99@gmail.com',
               cc: 'kkirrinweb@yandex.ru',
               bcc: 'kkirrinweb@yandex.ru',
               replyTo: 'kkirrinweb@yandex.ru',
               subject: 'Новая заявка с сайта',
               text: 'Получена новая заявка с сайта. Проверьте Strapi.',
               html: '<p>Получена новая заявка с сайта. Проверьте Strapi.</p>',
           });
           return result; //Возвращаем результат метода create
       } catch (err) {
           strapi.log.error('Ошибка при отправке письма: ', err);
           ctx.response.status = 500;
           ctx.body = { error: 'Ошибка при отправке письма' }; // Сообщаем клиенту об ошибке

       }
    },
}));
