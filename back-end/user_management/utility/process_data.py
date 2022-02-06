from textwrap import indent
from user_app.models import UserBolgData
import json
from user_app.seializers import UserBolgDataSerializer
def process_data(request):
    try:
        print('123')
        data = request.FILES['file'].read()
        data = json.loads(data)
        print('1234')
        obj_list = [UserBolgData(**data_dict) for data_dict in data]
        print('1235')
        UserBolgData.objects.bulk_create(obj_list)
        print('1236')
        print(len(UserBolgData.objects.all()))
    except Exception as e:
        print(str(e))
    return {'status':"SUCCESS"}

def get_processed_data():
    #data = serializers.serialize('json', UserBolgData.objects.all(),indent=2)
    data = UserBolgDataSerializer(UserBolgData.objects.all(),many=True)
    #data = json.loads(data)
    return data.data