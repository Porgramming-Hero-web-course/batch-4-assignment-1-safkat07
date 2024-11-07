{

    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    type ChoseShape = Circle | Rectangle

    const calculateShapeArea = (areaOf: ChoseShape) => {
        if ('radius' in areaOf) {
            const r = areaOf.radius
            const piValue = Math.PI
            const result = piValue * r * r;
            return result.toFixed(2);
        }
        else {
            const w = areaOf.width
            const h = areaOf.height
            const res = w * h
            return res;
        }

    }
















    //
}