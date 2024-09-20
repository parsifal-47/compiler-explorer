import triton
import triton.language as tl
from triton.backends.triton_shared.driver import CPUDriver

triton.runtime.driver.set_active(CPUDriver())

@triton.jit
def kernel(in0, out0):
    for i in range(0, 10, 2):
        in1 = in0 + 1 + i
        in2 = in1 + 1

        out1 = out0 + 1 + i
        out2 = out1 + 1

        a1 = tl.load(in1)
        a2 = tl.load(in2)

        tl.store(out1, a1)
        tl.store(out2, a2)