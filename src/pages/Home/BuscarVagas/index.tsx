import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { SelectD } from "@/components/SelectItem";
import Footer from "@/components/footer";
import Vagas from "@/components/vagas";
import api from "@/services/api";

const BuscarVagas = () => {
  const [totalVagas, setTotalVagas] = useState(0);

  useEffect(() => {
    // Função para buscar a quantidade total de vagas disponíveis
    const fetchTotalVagas = async () => {
      try {
        const response = await api.get("/vagas");
        const totalVagas = response.data.length;
        setTotalVagas(totalVagas);
      } catch (error) {
        console.error("Error fetching total number of vacancies:", error);
      }
    };

    fetchTotalVagas();
  }, []);

  return (
    <div className="relative h-screen">
      <Header />
      <div className="flex justify-center py-8 bg-gradient-to-tr from-[#73C1E3] to-[#008DC9]">
        <Search />
      </div>

      <div className="px-[15%] py-16">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">{`${totalVagas} vagas de estágio disponíveis`}</p>
          <SelectD />
        </div>

        <hr />

        <div className="min-h-[23vh] mt-5">
          <Vagas />
        </div>
      </div>

      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BuscarVagas;
