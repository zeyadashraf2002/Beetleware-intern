

  const btn = document.getElementById("btn");
  const log = document.getElementById("log");

  btn.onclick = () => {
    const start = performance.now();

    // JANK: تنفيذ 300,000 عملية دفعة واحدة
    let total = 0;
    for (let i = 0; i < 300000; i++) {
      total += i;
    }

    const end = performance.now();

    log.innerHTML += `<p>Done in ${Math.round(end - start)} ms</p>`;
  };

 const btn2 = document.getElementById("btn2");
  const log2 = document.getElementById("log2");

  btn2.onclick = () => {
    const start = performance.now();

    let i = 0;
    let total = 0;
    const chunkSize = 2000;

    function processChunk() {
      const end = Math.min(i + chunkSize, 300000);

      for (; i < end; i++) {
        total += i;
      }

      if (i < 300000) {
        requestAnimationFrame(processChunk); // No jank!
      } else {
        const endTime = performance.now();
        log2.innerHTML += `<p>Fixed Version: ${Math.round(endTime - start)} ms</p>`;
      }
    }

    requestAnimationFrame(processChunk);
  };