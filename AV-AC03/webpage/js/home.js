// Base de dados de CPUs
const cpuData = [
  {
      "model": "i3 14100F",
      "brand": "Intel",
      "type": "desktop",
      "performance": 6,
      "supported_os": ["Windows", "Linux"],
      "price": 683.05,
      "energy_consumption": "medium",
      "base_frequency": "3.5GHz",
      "max_frequency": "4.7GHz",
      "cache": {
          "L1": "80KB",
          "L2": "2MB",
          "L3": "12MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i5 14400F",
      "brand": "Intel",
      "type": "desktop",
      "performance": 7,
      "supported_os": ["Windows", "Linux"],
      "price": 1159.11,
      "energy_consumption": "medium",
      "base_frequency": "2.5GHz",
      "max_frequency": "4.7GHz",
      "cache": {
          "L1": "80KB",
          "L2": "1.25MB",
          "L3": "20MB",
          "E-L1": "96KB",
          "E-L2": "2MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i7 14700KF",
      "brand": "Intel",
      "type": "desktop",
      "performance": 9,
      "supported_os": ["Windows", "Linux"],
      "price": 2499.90,
      "energy_consumption": "high",
      "base_frequency": "3.4GHz",
      "max_frequency": "5.6GHz",
      "cache": {
          "L1": "80KB",
          "L2": "2MB",
          "L3": "33MB",
          "E-L1": "96KB",
          "E-L2": "4MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i9 14900K",
      "brand": "Intel",
      "type": "desktop",
      "performance": 10,
      "supported_os": ["Windows", "Linux"],
      "price": 3396.51,
      "energy_consumption": "high",
      "base_frequency": "3.2GHz",
      "max_frequency": "6GHz",
      "cache": {
          "L1": "80KB",
          "L2": "2MB",
          "L3": "36MB",
          "E-L1": "96KB",
          "E-L2": "4MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 5 5500",
      "brand": "AMD",
      "type": "desktop",
      "performance": 6,
      "supported_os": ["Windows", "Linux"],
      "price": 530.00,
      "energy_consumption": "medium",
      "base_frequency": "3.6GHz",
      "max_frequency": "4.2GHz",
      "cache": {
          "L1": "64KB",
          "L2": "512KB",
          "L3": "16MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 5 7600X",
      "brand": "AMD",
      "type": "desktop",
      "performance": 7,
      "supported_os": ["Windows", "Linux"],
      "price": 1479.00,
      "energy_consumption": "high",
      "base_frequency": "4.7GHz",
      "max_frequency": "5.3GHz",
      "cache": {
          "L1": "64KB",
          "L2": "1MB",
          "L3": "32MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 7 7700X",
      "brand": "AMD",
      "type": "desktop",
      "performance": 8,
      "supported_os": ["Windows", "Linux"],
      "price": 1999.00,
      "energy_consumption": "high",
      "base_frequency": "4.5GHz",
      "max_frequency": "5.4GHz",
      "cache": {
          "L1": "64KB",
          "L2": "512KB",
          "L3": "32MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 9 7900X",
      "brand": "AMD",
      "type": "desktop",
      "performance": 10,
      "supported_os": ["Windows", "Linux"],
      "price": 2799.99,
      "energy_consumption": "high",
      "base_frequency": "4.7GHz",
      "max_frequency": "5.6GHz",
      "cache": {
          "L1": "64KB",
          "L2": "1MB",
          "L3": "64MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i3 1215U",
      "brand": "Intel",
      "type": "laptop",
      "performance": 4,
      "supported_os": ["Windows", "Linux"],
      "price": 2252.49,
      "energy_consumption": "low",
      "base_frequency": "1.2GHz",
      "max_frequency": "4.4GHz",
      "cache": {
          "L1": "80KB",
          "L2": "1.25MB",
          "L3": "10MB",
          "E-L1": "96KB",
          "E-L2": "2MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i5 1235U",
      "brand": "Intel",
      "type": "laptop",
      "performance": 5,
      "supported_os": ["Windows", "Linux"],
      "price": 2549.99,
      "energy_consumption": "low",
      "base_frequency": "1.3GHz",
      "max_frequency": "4.4GHz",
      "cache": {
          "L1": "80KB",
          "L2": "1.25MB",
          "L3": "12MB",
          "E-L1": "96KB",
          "E-L2": "2MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i7 1255U",
      "brand": "Intel",
      "type": "laptop",
      "performance": 5,
      "supported_os": ["Windows", "Linux"],
      "price": 3071.99,
      "energy_consumption": "low",
      "base_frequency": "3.5GHz",
      "max_frequency": "4.7GHz",
      "cache": {
          "L1": "80KB",
          "L2": "1.25MB",
          "L3": "12MB",
          "E-L1": "96KB",
          "E-L2": "2MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "i9 13900HX",
      "brand": "Intel",
      "type": "laptop",
      "performance": 9,
      "supported_os": ["Windows", "Linux"],
      "price": 7999.00,
      "energy_consumption": "medium",
      "base_frequency": "2.2GHz",
      "max_frequency": "5.4GHz",
      "cache": {
          "L1": "80KB",
          "L2": "2MB",
          "L3": "36MB",
          "E-L1": "96KB",
          "E-L2": "4MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 3 7320U",
      "brand": "AMD",
      "type": "laptop",
      "performance": 3,
      "supported_os": ["Windows", "Linux"],
      "price": 1699.99,
      "energy_consumption": "low",
      "base_frequency": "2.4GHz",
      "max_frequency": "4.1GHz",
      "cache": {
          "L1": "64KB",
          "L2": "512KB",
          "L3": "4MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 5 7520U",
      "brand": "AMD",
      "type": "laptop",
      "performance": 3,
      "supported_os": ["Windows", "Linux"],
      "price": 2294.99,
      "energy_consumption": "low",
      "base_frequency": "2.8GHz",
      "max_frequency": "4.3GHz",
      "cache": {
          "L1": "64KB",
          "L2": "512KB",
          "L3": "4MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "Ryzen 7 5700U",
      "brand": "AMD",
      "type": "laptop",
      "performance": 6,
      "supported_os": ["Windows", "Linux"],
      "price": 2679.99,
      "energy_consumption": "low",
      "base_frequency": "1.8GHz",
      "max_frequency": "4.3GHz",
      "cache": {
          "L1": "64KB",
          "L2": "512KB",
          "L3": "8MB"
      },
      "architecture": "cisc"
  },
  {
      "model": "M1",
      "brand": "Apple",
      "type": "laptop",
      "performance": 3,
      "supported_os": ["MacOS"],
      "price": 5724.90,
      "energy_consumption": "low",
      "base_frequency": "3.2GHz",
      "max_frequency": "3.2GHz",
      "cache": {
          "L1": "192KB",
          "L2": "12MB",
          "E-L1": "128KB",
          "E-L2": "4MB"
      },
      "architecture": "risc"
  },
  {
      "model": "M2",
      "brand": "Apple",
      "type": "laptop",
      "performance": 6,
      "supported_os": ["MacOS"],
      "price": 7559.10,
      "energy_consumption": "low",
      "base_frequency": "3.5GHz",
      "max_frequency": "3.5GHz",
      "cache": {
          "L1": "192KB",
          "L2": "16MB",
          "E-L1": "128KB",
          "E-L2": "4MB"
      },
      "architecture": "risc"
  },
  {
      "model": "M3",
      "brand": "Apple",
      "type": "laptop",
      "performance": 7,
      "supported_os": ["MacOS"],
      "price": 8249.00,
      "energy_consumption": "low",
      "base_frequency": "4.0GHz",
      "max_frequency": "4.0GHz",
      "cache": {
          "L1": "192KB",
          "L2": "12MB",
          "E-L1": "128KB",
          "E-L2": "4MB"
      },
      "architecture": "risc"
  },
  {
      "model": "Snapdragon X Plus",
      "brand": "Qualcomm",
      "type": "laptop",
      "performance": 6,
      "supported_os": ["Windows"],
      "price": 10708.75,
      "energy_consumption": "low",
      "base_frequency": "3.4GHz",
      "max_frequency": "4.0GHz",
      "cache": {
          "total_cache": "30MB"
      },
      "architecture": "risc"
  }
];

// Manipulação de inputs de faixa de preço
const minInput = document.getElementById("from");
const maxInput = document.getElementById("to");

minInput.addEventListener("input", function () {
  if (this.value < 0) {
    this.value = 0;
  }

  if (parseInt(this.value) > parseInt(maxInput.value)) {
    maxInput.value = this.value;
  }
});

maxInput.addEventListener("input", function () {
  if (this.value < 0) {
    this.value = 0;
  }

  if (parseInt(this.value) < parseInt(minInput.value)) {
    this.value = minInput.value;
  }
});

// Seleção do nível de energia
function selectEnergyLevel(level) {
  const options = document.querySelectorAll(".energy-option");
  options.forEach((option) => option.classList.remove("active"));

  const selectedOption = document.getElementById(
    level.toLowerCase() + "-energy"
  );
  selectedOption.classList.add("active");

  const hiddenInput = document.getElementById("energy-consumption");
  hiddenInput.value = level.toLowerCase(); // Garantir correspondência com os valores de cpuData

  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "none";
}

// Validação de seleção de nível de energia
function validateEnergySelection() {
  const hiddenInput = document.getElementById("energy-consumption");
  const errorMessage = document.getElementById("error-message");

  if (hiddenInput.value === "") {
    errorMessage.style.display = "block";
    return false;
  }

  return true;
}

// Função para exibir mensagens na div "response"
function displayResponse(message, reason, isError = false) {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = ""; // Limpa mensagens anteriores
  responseDiv.style.display = "block";
  responseDiv.style.color = isError ? "red" : "white";

  const specsTitle = document.createElement("h3");
  specsTitle.textContent = "Especificações Técnicas";
  responseDiv.appendChild(specsTitle);

  const messageElement = document.createElement("p");
  messageElement.innerHTML = message.replace(/\n/g, "<br>");
  responseDiv.appendChild(messageElement);

  if (reason) {
    const reasonTitle = document.createElement("h3");
    reasonTitle.textContent = "Por que este é o melhor modelo de CPU para você?";
    responseDiv.appendChild(reasonTitle);

    const reasonDiv = document.createElement("div");
    reasonDiv.id = "reason";
    reasonDiv.innerHTML = reason.replace(/\n/g, "<br>");
    responseDiv.appendChild(reasonDiv);
  }
}

// Função para filtrar CPUs com base nas preferências do usuário
function filterCPUs(cpuData, userPreferences) {
  const performanceMapping = {
    gaming: 8,
    "video-editing": 7,
    study: 4,
    "online-nav": 3,
    programming: 5,
    "3d-render": 8,
    "sci-sim": 9,
  };

  const requiredPerformance = performanceMapping[userPreferences.use];

  return cpuData
    .filter((cpu) => {
      if (!requiredPerformance) return false; // Excluir caso "use" não esteja no mapeamento

      if (cpu.performance < requiredPerformance) return false;
      if (cpu.price < userPreferences.minPrice || cpu.price > userPreferences.maxPrice) return false;
      if (userPreferences.energyConsumption && cpu.energy_consumption !== userPreferences.energyConsumption) return false;
      if (userPreferences.brand && userPreferences.brand !== "no-preference" && cpu.brand.toLowerCase() !== userPreferences.brand.toLowerCase()) return false;
      if (userPreferences.os && !cpu.supported_os.map(os => os.toLowerCase()).includes(userPreferences.os.toLowerCase())) return false;
      if (userPreferences.device && cpu.type !== userPreferences.device) return false;

      return true;
    })
    .sort((a, b) => a.price - b.price); // Ordenar por menor preço
}

// Função principal para processar os dados e exibir resultados
function processCPUs(userPreferences) {
  console.log("Iniciando o filtro de CPUs...");

  const filteredCPUs = filterCPUs(cpuData, userPreferences);

  if (filteredCPUs.length > 0) {
    const recommendedCPU = filteredCPUs[0];
    const commonCacheLevels = [];
    const efficiencyCacheLevels = [];

    for (const [key, value] of Object.entries(recommendedCPU.cache)) {
      if (key.startsWith("E-")) {
        efficiencyCacheLevels.push(`${key.replace("E-", "")} Cache: ${value}`);
      } else {
        commonCacheLevels.push(`${key} Cache: ${value}`);
      }
    }

    const message = `
      CPU Recomendado: ${recommendedCPU.model}
      Marca: ${recommendedCPU.brand}
      Preço: R$${recommendedCPU.price.toFixed(2)}
      Consumo de Energia: ${recommendedCPU.energy_consumption === 'low' ? 'Baixo' : recommendedCPU.energy_consumption === 'medium' ? 'Médio' : 'Alto'}
      Tipo: ${recommendedCPU.type}
      Frequência Base: ${recommendedCPU.base_frequency}
      Frequência Máxima: ${recommendedCPU.max_frequency}
      Arquitetura: ${recommendedCPU.architecture === 'risc' ? 'RISC' : 'CISC'}
      Cache de Núcleo Comum:
      ${commonCacheLevels.join("\n")}
      Cache de Núcleo de Eficiência:
      ${efficiencyCacheLevels.length > 0 ? efficiencyCacheLevels.join("\n") : 'Nenhum'}
    `;

    let reason = "\nO modelo de CPU acima foi escolhido considerando as necessidades de performance para o tipo de tarefa que você deseja executar e o orçamento que você possui para investir. A CPU escolhida foi aquela que tinha menor preço dentre as que se enquadravam no seu comportamento de uso.";
    if (recommendedCPU.architecture === 'cisc') {
      reason += `<h3>O que é uma arquitetura do tipo CISC?</h3>`;
      reason += `CISC (Complex Instruction Set Computer) - É uma arquitetura de processadores que é comumente encontrada em computadores desktop e laptops de médio/alto desempenho. Ela costuma ter maior poder de processamento, sendo capaz de realizar tarefas complexas em menos passos, no entanto ela também tem um maior gasto energético.\n`;
    } else if (recommendedCPU.architecture === 'risc') {
      reason += `<h3>O que é uma arquitetura do tipo RISC?</h3>`;
      reason += `RISC (Reduced Instruction Set Computer) - É uma arquitetura de processadores comumente encontrada em dispositivos móveis e laptops que priorizam a eficiência energética. Ela é feita para ser mais simples e eficiente, dividindo as tarefas em passos menos complexos, porém em maior quantidade de passos, isso garante que ela tenha menor gasto de energia, o que a faz uma escolha ideal para dispositivos que precisam de bateria.\n`;
    }

    displayResponse(message, reason);
  } else {
    displayResponse("Nenhuma CPU encontrada com as preferências fornecidas.", null, true);
  }
}

// Evento de envio do formulário
const form = document.getElementById("quiz-q1");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateEnergySelection()) {
    displayResponse("Por favor, selecione um nível de consumo de energia.", null, true);
    return;
  }

  const userPreferences = {
    use: document.getElementById("use").value,
    minPrice: parseFloat(document.getElementById("from").value),
    maxPrice: parseFloat(document.getElementById("to").value),
    energyConsumption: document.getElementById("energy-consumption").value,
    brand: document.getElementById("brand").value,
    os: document.getElementById("os").value,
    device: document.getElementById("device").value,
  };

  console.log("Preferências do usuário:", userPreferences);

  processCPUs(userPreferences);
  document.getElementById("response").style.display = "block";
});
