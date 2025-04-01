EXPLICACION ALGORITMO: https://www.youtube.com/watch?v=NUWAXbSlsws

# LOGICA 


¡Ah, perfecto! Vamos a destripar esa línea clave para entender **por qué** tomar esa decisión funciona.  

### **La Lógica Fundamental**  
La línea:  
```typescript
current_sum = Math.max(nums[i], current_sum + nums[i]);
```  
**Representa una elección estratégica en cada paso del arreglo:**  

1. **Opción A: `nums[i]` (reiniciar el subarreglo)**  
   - **"Olvida todo lo anterior y empieza un nuevo subarreglo desde `nums[i]`."**  
   - Esto ocurre cuando **la suma acumulada hasta ahora (`current_sum`) es negativa**, porque arrastrar una suma negativa solo empeoraría el resultado.  

2. **Opción B: `current_sum + nums[i]` (extender el subarreglo actual)**  
   - **"Sigue acumulando, porque lo que llevas te está ayudando."**  
   - Esto ocurre cuando **la suma acumulada hasta ahora (`current_sum`) es positiva**, porque aunque `nums[i]` sea negativo, puede que luego vengan números grandes que compensen.  

---

### **¿Por qué es correcto tomar esta decisión?**  
#### **Caso 1: Si `current_sum` es negativo**  
- Si `current_sum = -3` y `nums[i] = 4`:  
  - `Math.max(4, -3 + 4) = Math.max(4, 1) = 4` → **Elegimos reiniciar.**  
  - **¿Por qué?**  
    - Si seguimos acumulando, empezamos con una deuda (`-3`), y aunque `4` lo compensa, es mejor **empezar desde `4`** directamente (sin arrastrar la deuda).  

#### **Caso 2: Si `current_sum` es positivo**  
- Si `current_sum = 5` y `nums[i] = -2`:  
  - `Math.max(-2, 5 + (-2)) = Math.max(-2, 3) = 3` → **Elegimos seguir acumulando.**  
  - **¿Por qué?**  
    - Aunque `-2` perjudica, la suma acumulada (`5`) es lo suficientemente grande como para que **valga la pena seguir** (por si luego vienen números positivos que aumenten la suma).  

---

### **Ejemplo concreto para entenderlo mejor**  
Tomemos `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]` y analicemos algunos pasos clave:  

1. **Paso 1 (i=0):**  
   - `current_sum = -2` (inicialización).  

2. **Paso 2 (i=1, nums[i] = 1):**  
   - `current_sum = Math.max(1, -2 + 1) = Math.max(1, -1) = 1`  
   - **Decisión:** Reiniciar (porque `-2` era una "deuda" que no valía la pena arrastrar).  

3. **Paso 4 (i=3, nums[i] = 4):**  
   - `current_sum = Math.max(4, -2 + 4) = Math.max(4, 2) = 4`  
   - **Decisión:** Reiniciar (porque `-2` era negativo y es mejor empezar desde `4`).  

4. **Paso 7 (i=6, nums[i] = 1):**  
   - `current_sum = Math.max(1, 5 + 1) = Math.max(1, 6) = 6`  
   - **Decisión:** Seguir acumulando (porque `5` era positivo y conviene extender el subarreglo).  

---

### **¿Por qué no siempre reiniciar?**  
Podrías pensar: *"¿Por qué no siempre reiniciar si encuentro un número positivo?"*  
- **Ejemplo:** `nums = [2, -1, 3]`  
  - Si en `i=1` (número `-1`) decidieras reiniciar, perderías la oportunidad de llegar a `[2, -1, 3] = 4`.  
  - Pero el algoritmo **elige seguir acumulando** (`2 + (-1) = 1`), porque luego viene `3` y la suma total es mayor.  

---

### **Resumen de la lógica**  
| Situación | Decisión | Razón |
|-----------|----------|-------|
| **`current_sum` es negativo** | Reiniciar (`nums[i]`) | Arrastrar una suma negativa solo empeora el resultado. |
| **`current_sum` es positivo** | Seguir acumulando (`current_sum + nums[i]`) | Aunque `nums[i]` sea negativo, puede que luego vengan números grandes que compensen. |

---

### **Conclusión**  
Esta línea es el **corazón del Algoritmo de Kadane**, porque en cada paso toma la **mejor decisión local** (¿reiniciar o seguir?), lo que garantiza que al final encuentre la **mejor solución global** (el subarreglo de suma máxima).  

**¿Queda más claro ahora?** 😊 Si aún hay dudas, dime en qué parte y lo explico de otra forma.