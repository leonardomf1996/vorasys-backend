import request from 'supertest';
import { app } from '../app';

describe('FaleMais', async () => {
   it("should be possible to verify the value of a connection with DDD 11 to DDD 17 ", async () => {
      const response = await request(app).post("/faleMais")
         .send({
            origin: "11",
            destination: "17",
            plan: "FaleMais 60",
            minutes: "80"
         });

      expect(response.status).toBe(200);
      expect(response.text).toContain("origin");
      expect(response.text).toContain("destination");
      expect(response.text).toContain("minutes");
      expect(response.text).toContain("plan");
      expect(response.text).toContain("withFaleMais");
      expect(response.text).toContain("withoutFaleMais");
      expect(response.body.withFaleMais).toBe(37.4);
      expect(response.body.withoutFaleMais).toBe(136);
   })
})