import { Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import * as yup from 'yup';

class FaleMaisController {
   async show(request: Request, response: Response) {
      const { origin, destination, plan, minutes } = request.body;

      const schema = yup.object().shape({
         origin: yup.string().required('Origem obrigatória'),
         destination: yup.string().required('Destino obrigatório'),
         plan: yup.string().required('Plano obrigatório'),
         minutes: yup.string().required('Minutagem obrigatória')
      });

      try {
         await schema.validate(request.body, {
            abortEarly: false
         });
      } catch (error) {
         throw new AppError(error);
      }

      let remaiderMinutes = 0;
      let returnMessage = {};

      switch (origin) {
         case '11':
            if (destination === '16' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }
            if (destination === '16' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }
            if (destination === '16' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }

            if (destination === '17' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 1.7) + ((remaiderMinutes * 1.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.7
               };
               break;
            }
            if (destination === '17' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 1.7) + ((remaiderMinutes * 1.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.7
               };
               break;
            }
            if (destination === '17' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 1.7) + ((remaiderMinutes * 1.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.7
               };
               break;
            }

            if (destination === '18' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 0.9) + ((remaiderMinutes * 0.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 0.9
               };
               break;
            }
            if (destination === '18' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 0.9) + ((remaiderMinutes * 0.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 0.9
               };
               break;
            }
            if (destination === '18' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 1.7) + ((remaiderMinutes * 1.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.7
               };
               break;
            }


         case '16':
            if (destination === '11' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 2.9) + ((remaiderMinutes * 2.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.9
               };
               break;
            }
            if (destination === '11' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 2.9) + ((remaiderMinutes * 2.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.9
               };
               break;
            }
            if (destination === '11' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 2.9) + ((remaiderMinutes * 2.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.9
               };
               break;
            }


         case '17':
            if (destination === '11' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 2.7) + ((remaiderMinutes * 2.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.7
               };
               break;
            }
            if (destination === '16' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 2.7) + ((remaiderMinutes * 2.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.7
               };
               break;
            }
            if (destination === '16' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 2.7) + ((remaiderMinutes * 2.7) * 0.1)) : 0,
                  withoutFaleMais: minutes * 2.7
               };
               break;
            }


         case '18':
            if (destination === '11' && plan === 'FaleMais 30') {
               if (minutes > 30) {
                  remaiderMinutes = minutes - 30;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 30 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }
            if (destination === '11' && 'FaleMais 60') {
               if (minutes > 60) {
                  remaiderMinutes = minutes - 60;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 60 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }
            if (destination === '11' && 'FaleMais 120') {
               if (minutes > 120) {
                  remaiderMinutes = minutes - 120;
               }
               returnMessage = {
                  origin,
                  destination,
                  minutes,
                  plan,
                  withFaleMais: minutes > 120 ? ((remaiderMinutes * 1.9) + ((remaiderMinutes * 1.9) * 0.1)) : 0,
                  withoutFaleMais: minutes * 1.9
               };
               break;
            }
      }

      return response.status(200).json(returnMessage);
   }
}

export { FaleMaisController };